import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import {
  AuthChangeEvent,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gym } from './types/type.gym';
import { GymDetails } from './types/type.gym-details';
import { Credentials } from './types/type.login';
import { MembershipType } from './types/type.membership-type';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  session: Session;
  private supabase: SupabaseClient;
  private currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey,
      {
        autoRefreshToken: true,
      }
    );

    this.loadUser();

    this.supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        this.currentUser.next(session.user);
      } else {
        this.currentUser.next(false);
      }
    });
  }

  get getCurrentUser(): Observable<User> {
    return this.currentUser.asObservable();
  }

  loadUser() {
    const user = this.supabase.auth.user();
    if (user) {
      this.currentUser.next(user);
    } else {
      this.currentUser.next(false);
    }
  }

  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  async signUp(credentials: Credentials) {
    const { error, user } = await this.supabase.auth.signUp(credentials);
    if (error) {
      return error;
    }
    return user;
  }

  async signIn(credentials: Credentials) {
    const { user, error, session } = await this.supabase.auth.signIn(
      credentials
    );
    if (error) {
      return error;
    }
    this.session = session;
    return user;
  }

  async signOut() {
    this.session = null;
    return await this.supabase.auth.signOut();
  }

  async createNotice(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 5000 });
    await toast.present();
  }

  createLoader() {
    return this.loadingCtrl.create();
  }

  async getGyms(): Promise<Gym[]> {
    const { data, error } = await this.supabase.from('classes').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getGymDetails(id: number): Promise<GymDetails> {
    const { data, error } = await this.supabase
      .from('class_details')
      .select(
        `
      *,
      classes (
        name, exercise_type
      )
    `
      )
      .eq('classes_id', id);

    if (error) {
      throw new Error(error.message);
    }
    return data[0];
  }

  async getMembershipTypes(): Promise<MembershipType[]> {
    const { data, error } = await this.supabase
      .from('membership_type')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}
