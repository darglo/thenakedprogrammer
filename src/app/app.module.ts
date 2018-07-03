import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartpageComponent } from './startpage/startpage.component';
import { RecipeEditorComponent } from './recipe-editor/recipe-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeViewComponent,
    IngredientListComponent,
    StartpageComponent,
    RecipeEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
