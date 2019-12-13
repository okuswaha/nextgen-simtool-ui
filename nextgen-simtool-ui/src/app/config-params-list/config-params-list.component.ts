import {Component, Input, OnInit} from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {SimulationData} from "../model/simulationData";

@Component({
  selector: 'app-config-params-list',
  templateUrl: './config-params-list.component.html'
})
export class ConfigParamsListComponent{

  @Input() simulationDataList: SimulationData[];
  xmlContent: string;

  constructor(private productService: ProductServiceService) {

  }
 getXMLContent(event, xmlData){
    this.xmlContent = xmlData;
  }
}
