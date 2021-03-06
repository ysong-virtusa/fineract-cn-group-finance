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
import {Router} from '@angular/router';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import * as tellerActions from '../teller.actions';
import {Teller} from 'app/sevices/teller/domain/teller.model' 

@Injectable()
export class TellerRouteEffects {

/*  @Effect({ dispatch: false })
  createTellerSuccess$: Observable<Action> = this.actions$
    .ofType(tellerActions.CREATE_TELLER_SUCCESS, tellerActions.UPDATE_TELLER_SUCCESS)
    .map(action => action.payload)
    .do(payload => {
      this.router.navigate(['../'], { relativeTo: payload.activatedRoute });
    });

  @Effect({ dispatch: false })
  executeCommandSuccess$: Observable<Action> = this.actions$
    .ofType(tellerActions.EXECUTE_COMMAND_SUCCESS)
    .map(action => action.payload)
    .do(payload => {
      this.router.navigate(['../'], { relativeTo: payload.activatedRoute });
    });

    */

  constructor(private actions$: Actions, private router: Router) { }
}
