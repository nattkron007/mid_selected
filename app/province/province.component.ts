import { Component, OnInit } from "@angular/core";
import { ProvinceService } from "./province.service";
import { SearchBar } from "ui/search-bar";
@Component({
    selector: "province",
    templateUrl: "province.component.html",
    moduleId: module.id
})

export class provinceComponent implements OnInit {
    listProvince = []
    myList = []
    constructor (
        private ProvinceService: ProvinceService
    ) {

    }
    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        let searchValue = searchBar.text.toLowerCase();

        this.myList = [];
        if (searchValue !== "") {
            for (let i = 0; i < this.listProvince.length; i++) {
                if (this.listProvince[i].province.toLowerCase().indexOf(searchValue) !== -1) {
                    this.myList.push(this.listProvince[i]);
                }
            }
        } else {
            this.myList = this.listProvince
        }
    }
    ngOnInit () {
        this.ProvinceService.calprovince()
        .subscribe(
            (Response) => {
                this.listProvince = Response
                this.myList = this.listProvince
                console.log(JSON.stringify(Response));
            },
            (error) => {
                // error
                alert("province Error");
            }
            
        );
    }
 }
