import {INews} from '../news';

export class NewsModel {
    public id!: number;
    public image!: string;
    public date!: string;
    public description!: string;

    constructor(responseData: INews) {
        this._setId(responseData);
        this.setImage(responseData);
        this.setDate(responseData);
        this.setDescription(responseData);
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
}