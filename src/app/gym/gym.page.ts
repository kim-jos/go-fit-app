import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../supabase/supabase.service';
import { Gym } from '../supabase/types/type.gym';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.page.html',
  styleUrls: ['./gym.page.scss'],
})
export class GymPage implements OnInit {
  public gymList: Gym[];

  constructor(
    private readonly supabase: SupabaseService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.gymList = await this.supabase.getGyms();
  }

  // navigateToGymDetails(id: number) {
  //   // const params: NavigationExtras = {
  //   //   queryParams: { id },
  //   // };
  //   alert(id);
  //   this.router.navigate(['gym-details'], {
  //     queryParams: { id },
  //     queryParamsHandling: 'merge',
  //   });
  // }
}
