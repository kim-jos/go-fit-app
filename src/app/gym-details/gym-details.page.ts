import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from '../supabase/supabase.service';
import { GymDetails } from '../supabase/types/type.gym-details';

@Component({
  selector: 'app-gym-details',
  templateUrl: './gym-details.page.html',
  styleUrls: ['./gym-details.page.scss'],
})
export class GymDetailsPage implements OnInit {
  isModalOpen = false;
  gymDetails: GymDetails;
  private id;

  constructor(
    private readonly supabase: SupabaseService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.gymDetails = await this.supabase.getGymDetails(this.id);

  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
