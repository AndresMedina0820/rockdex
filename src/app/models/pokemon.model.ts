export interface PokemonData {
	name: string,
	url: string
}

export interface Type {
    slot: number;
    type: PokemonData;
}

export interface Pokemon {
	id: string,
	name: string,
	pic: string[],
	types: Type[],
	fav: boolean
}

export interface PokemonDetail extends Pokemon {
	description: string,
	height: number,
	weight: number
}
