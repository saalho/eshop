import { Component, OnInit } from '@angular/core';
import { NoticeService} from '../services/notice.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  allNotices=[];

  constructor(private notice: NoticeService) { }

  ngOnInit(): void {
    this.notice.getNotices().subscribe(nt => {
      this.allNotices = nt;
      console.log(nt);
    })
  }

}
