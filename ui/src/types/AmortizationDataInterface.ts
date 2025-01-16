import { AmortizationDataItemInterface } from './AmortizationDataItemInterface';
import { AmortizationDataTotalInterface } from './AmortizationDataTotalInterface';

export interface AmortizationDataInterface {
  items: AmortizationDataItemInterface[];
  totals?: AmortizationDataTotalInterface;
}
