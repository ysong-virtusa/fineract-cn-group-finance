/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import {Injectable} from '@angular/core';
import {OfficeService} from '../../../sevices/office/office.service';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {of} from 'rxjs/observable/of';
import * as officeActions from '../office.actions';
import {emptySearchResult} from '../../../common/store/search.reducer';

@Injectable()
export class OfficeSearchApiEffects {

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(officeActions.SEARCH)
    .debounceTime(300)
    .map((action: officeActions.SearchAction) => action.payload)
    .switchMap(fetchRequest => {
      const nextSearch$ = this.actions$.ofType(officeActions.SEARCH).skip(1);

      return this.officeService.listOffices(fetchRequest)
        .takeUntil(nextSearch$)
        .map(officePage => new officeActions.SearchCompleteAction({
          elements: officePage.offices,
          totalElements: officePage.totalElements,
          totalPages: officePage.totalPages
        }))
        .catch(() => of(new officeActions.SearchCompleteAction(emptySearchResult())));
    });

  constructor(private actions$: Actions, private officeService: OfficeService) { }
}
