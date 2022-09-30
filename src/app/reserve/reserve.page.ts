import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ParamMap } from '@angular/router';
import { SupabaseService } from '../supabase/supabase.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.page.html',
  styleUrls: ['./reserve.page.scss'],
})
export class ReservePage implements OnInit {
  classId = '';
  constructor(private route: ActivatedRoute, private readonly supabase: SupabaseService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.classId = params['classId'];
    });
    this.classId = this.route.snapshot.params.classId;
  }

  makeReservation(classId: number, userId: number, reservation_time: string) {
    this.supabase.reserve(classId, 2, "8");
  }

}
