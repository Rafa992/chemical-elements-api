export class ChemicalElementsDto {
	order: number
	symbol: string
	name: string
	atomicMass: string
	group: string
	period: string
	learned: boolean
	unlearned: boolean
	repetitions: number
}

export class EditChemicalElementsDto extends ChemicalElementsDto {
	id: string
}
