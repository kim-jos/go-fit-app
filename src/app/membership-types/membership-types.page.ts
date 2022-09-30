import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase/supabase.service';
import { MembershipType } from '../supabase/types/type.membership-type';

@Component({
  selector: 'app-membership-types',
  templateUrl: './membership-types.page.html',
  styleUrls: ['./membership-types.page.scss'],
})
export class MembershipTypesPage implements OnInit {
  membershipTypes: MembershipType[];
  constructor(private readonly supabase: SupabaseService) {}

  async ngOnInit() {
    this.membershipTypes = await this.supabase.getMembershipTypes();
  }
}
