import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
    EventManagerService
} from '../../core/event-manager.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {
    closeResult: string;
    constructor(
        private eventManagementSvc: EventManagerService,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.eventManagementSvc.onCardAdd.subscribe((data) => {
            console.log(data);
        });
    }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

}
