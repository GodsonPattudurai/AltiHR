import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fillerNav = [
    {name: 'Atlas', href: '', icon: 'bubble_chart'},
    {name: 'Y2019 Holidays', href: '', icon: 'av_timer'},
    {name: 'Employee Contact Points', href: '', icon: 'perm_contact_calendar'},
    {name: 'Learning Management System', href: '', icon: 'library_books'},
    {name: 'Employee Self Service', href: '', icon: 'border_all'},
    {name: 'Salary Account', href: 'bank-account', icon: 'account_balance'},
    {name: 'Flexible Benefit Options', href: '', icon: 'supervised_user_circle'},
    {name: 'Zeta Meal Card - FAQ', href: '', icon: 'credit_card'},
    {name: 'Group Medical Insurance', href: '', icon: 'local_hospital'},
    {name: 'Income Tax Declaration', href: '', icon: 'star'},
    {name: 'Provident Fund Options', href: '', icon: 'content_copy'},
    {name: 'PF Transfer', href: '', icon: 'insert_chart'},
    {name: 'Leave Self Service', href: '', icon: 'time_to_leave'},
    {name: 'Helpdesk', href: '', icon: 'help'}
  ];

}
