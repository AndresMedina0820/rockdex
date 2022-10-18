import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ConcatUnitPipe } from './pipes/concat-unit.pipe';
import { PkmFavButtonComponent } from './libs/pkm-fav-button/pkm-fav-button.component';
import { PkmButtonComponent } from './libs/pkm-button/pkm-button.component';
import { PkmTopBarComponent } from './libs/pkm-top-bar/pkm-top-bar.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonComponent,
    PokemonDetailComponent,
    NavbarComponent,
    ConcatUnitPipe,
    PkmFavButtonComponent,
    PkmButtonComponent,
    PkmTopBarComponent,
    FavoritesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
