/*
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

import MatrixModel from '../../coord/matrix/MatrixModel';
import ExtensionAPI from '../../core/ExtensionAPI';
import { ComponentView } from '../../echarts.all';
import GlobalModel from '../../model/Global';
import * as graphic from '../../util/graphic';

class MatrixView extends ComponentView {

    static type = 'matrix';
    type = MatrixView.type;

    render(matrixModel: MatrixModel, ecModel: GlobalModel, api: ExtensionAPI) {

        const group = this.group;

        group.removeAll();

        this._renderGrid(matrixModel);
    }

    protected _renderGrid(matrixModel: MatrixModel) {
        const coordSys = matrixModel.coordinateSystem;
        const rect = coordSys.getRect();
        this.group.add(new graphic.Rect({
            shape: rect,
            style: {
                fill: 'none',
                stroke: '#333',
                lineWidth: 2
            }
        }));
    }
}

export default MatrixView;
