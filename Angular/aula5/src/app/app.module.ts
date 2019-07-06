import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MessageListComponent } from './message-list/message-list.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { messageReducer } from './store/messages.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    MessageListComponent,
    AddMessageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({counter: counterReducer,
    messages: messageReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
