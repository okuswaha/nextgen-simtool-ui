import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from './model/product';
import {ProductServiceService} from './service/product-service.service';
import {ConfigParams} from "./model/configParams";
import {SimulationData} from "./model/simulationData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;

  product: Product[];
  configParams: ConfigParams;
  messageType: String;
  loadComponent: boolean;
  loadJumbotron: boolean;
  fileToUpload: File = null;
  fileText: string;
  configParamsTo: ConfigParams;
  simulationDataList : SimulationData[];

  constructor(private productService: ProductServiceService) {

  }

  ngOnInit() {
    this.loadJumbotron = true;
    this.productService.getProducts().subscribe(data => {
      this.product = data;
    });
  }

  getConfigParams (event, productName, messageType){
    this.loadComponent = true;
    this.loadJumbotron = false;
    this.productService.getConfigurableParamsByMessageType(productName, messageType).subscribe( configData => {
      this.configParams = configData;
    });
    this.productService.getConfigParamsList(productName, messageType).subscribe( simulationdData => {
      this.simulationDataList = simulationdData;
    });
  }
}
