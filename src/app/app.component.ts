import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // constructor(private supabase: SupabaseService, private router: Router) {
  //   this.supabase.authChanges((_, session) => {
  //     console.log(`session: ${session}`);
  //     if (session?.user) {
  //       this.router.navigate(['/account']);
  //     }
  //   });
  // }
}
