import { Component, OnInit } from '@angular/core';
import { NoticeService} from '../services/notice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  allNotices = [];

  constructor(private notice: NoticeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var categoryId = this.route.snapshot.paramMap.get('id');

    if (categoryId == null){
      this.notice.getNotices().subscribe(nt => {
        this.allNotices = nt;
        console.log(nt);
      })
    }
    else{
      this.notice.getNoticesById(categoryId).subscribe(nt_id => {
        this.allNotices = nt_id.body;
        console.log(nt_id);
      })
      
    }

  }

}
