type VotationOptions = {
    numberOfVotes: number;
    option: string;
};

export class Votation {
    private _votationOptions: VotationOptions[] = [];

    constructor(public details: string) {}

    addVotationOption(votationOption: VotationOptions): void {
        this._votationOptions.push(votationOption);
    }

    vote(votationIndex: number): void {
        if(!this._votationOptions[votationIndex]) return;

        this._votationOptions[votationIndex].numberOfVotes += 1;
    }

    get votationOptions(): VotationOptions[] {
        return this._votationOptions;
    }
}

export class VotationApp {
    private votations: Votation[] = [];

    addVotation(votation: Votation): void {
        this.votations.push(votation);
    }

    showVotations(): void {
        for(const votation of this.votations){
            console.log(votation.details)
            for(const votationOption of votation.votationOptions){
                console.log(votationOption.option, votationOption.numberOfVotes)
            }
        }
        console.log('\n\n')
    }
}

const votation1 = new Votation("Qual sua linguagem de programação favorita?");

votation1.addVotationOption({ option: 'python', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'javascript', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'typescript', numberOfVotes: 0 });

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

votationApp.showVotations();
