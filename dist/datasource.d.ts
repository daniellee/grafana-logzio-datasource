import { ElasticQueryBuilder } from './query_builder';
import { IndexPattern } from './index_pattern';
export declare class LogzioDatasource {
    private $q;
    private backendSrv;
    private templateSrv;
    private timeSrv;
    basicAuth: string;
    withCredentials: boolean;
    url: string;
    name: string;
    index: string;
    timeField: string;
    esVersion: number;
    interval: string;
    maxConcurrentShardRequests: number;
    queryBuilder: ElasticQueryBuilder;
    indexPattern: IndexPattern;
    headers: {
        key: string;
        value: string;
    }[];
    constructor(instanceSettings: any, $q: any, backendSrv: any, templateSrv: any, timeSrv: any);
    private request(method, url, data?);
    private get(url);
    private post(url, data);
    annotationQuery(options: any): any;
    testDatasource(): any;
    getQueryHeader(searchType: any, timeFrom: any, timeTo: any): any;
    query(options: any): any;
    getFields(query: any): any;
    getTerms(queryDef: any): any;
    metricFindQuery(query: any): any;
    getTagKeys(): any;
    getTagValues(options: any): any;
}
