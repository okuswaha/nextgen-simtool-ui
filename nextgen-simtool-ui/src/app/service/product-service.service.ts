import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../model/product';
import {ConfigParams} from "../model/configParams";
import 'rxjs/add/observable/of';
import {SimulationData} from "../model/simulationData";

@Injectable()
export class ProductServiceService {

  private productUrl: string;
  private configParamUrl: string;
  private simulationDataUrl: string;

  constructor(private http: HttpClient) {
    this.productUrl = 'http://localhost:8090/product';
    this.configParamUrl = 'http://localhost:8090/configParams?';
    this.simulationDataUrl = 'http://localhost:8090/simulationData';
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  public getConfigurableParamsByMessageType(productName, messageType): Observable<ConfigParams> {
    return this.http.get<ConfigParams>(this.configParamUrl+'productName='+productName+'&messageType='+messageType);
  }

  public save(stimulationobj: SimulationData) : Observable<SimulationData> {
    return this.http.post<SimulationData>(this.simulationDataUrl, stimulationobj);
  }

  public getConfigParamsList(productName, messageType): Observable<SimulationData[]> {
    return this.http.get<SimulationData[]>(this.simulationDataUrl+"/"+productName+"/"+messageType);
  }
}
