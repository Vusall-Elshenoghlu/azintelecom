import {INews} from '../news';

export class NewsModel {
    public id!: number;
    public image!: string;
    public date!: string;
    public description!: string;
    public year!: number;

    constructor(responseData: INews) {
        this._setId(responseData);
        this.setImage(responseData);
        this.setDate(responseData);
        this.setDescription(responseData);
        this.setYear(responseData);
    }

    private _setId({id}: INews): void {
        this.id = id;
    }
    private setImage({image}: INews): void {
        this.image = image;
    }
    private setDate({date}: INews): void {
        this.date = date;
    }
    private setDescription({description}: INews): void {
        this.description = description;
    }
    private setYear({year}: INews): void {
        this.year = year;
    }
}