import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from 'src/app/supabase/supabase.service';
import { GymDetails } from 'src/app/supabase/types/type.gym-details';

@Component({
  selector: 'app-gym-details',
  templateUrl: './gym-details.component.html',
  styleUrls: ['./gym-details.component.scss'],
})
export class GymDetailsComponent implements OnInit {
  isModalOpen = false;
  gymDetails: GymDetails;
  private id;

  constructor(
    private readonly supabase: SupabaseService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.params.id;
    // const id = this.route.snapshot.paramMap.get('id');
    this.gymDetails = await this.supabase.getGymDetails(this.id);
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
