import React from 'react';
import { Chart } from 'chart.js';
import * as helpers from 'chart.js/helpers';

export const LabelPluginProvider = ({ children }) => {
    React.useEffect(() => {
        window.Chart = Chart;
        Chart.helpers = helpers;
        import('chart.js-plugin-labels-dv');
    }, []);
    return children;
};