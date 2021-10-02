import * as React from 'react';
import styles from './SimpleChart.module.scss';
import { ISimpleChartProps } from './ISimpleChartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ChartControl, ChartType } from '@pnp/spfx-controls-react/lib/ChartControl';

export default class SimpleChart extends React.Component < ISimpleChartProps, {} > {
  public render(): React.ReactElement<ISimpleChartProps> {
    return(
    <ChartControl
      type={ChartType.Bar}
      data={{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: escape(this.props.description),
          data: [65, 59, 80, 81, 56, 55, 40]
        }]
      }}/>
    );
  }
}
