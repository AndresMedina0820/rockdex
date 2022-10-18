import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from '../app/components/pokemons/pokemons.component';
import { PokemonDetailComponent } from '../app/components/pokemon-detail/pokemon-detail.component';
import { FavoritesComponent } from '../app/components/favorites/favorites.component';

const routes: Routes = [
	{path: '', redirectTo: '/pokemons', pathMatch: 'full'},
	{path: 'pokemons', component: PokemonsComponent},
	{path: 'pokemons/detail/:id', component: PokemonDetailComponent},
	{path: 'pokemons/favorites', component: FavoritesComponent},
	{path: '**', redirectTo: 'pokemons'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
