import { TurmaModule } from "./TurmaModule";

export class AlunoModule extends TurmaModule {
    protected nome: string;
    protected login: string;
    protected RA: string;

    override aprovado(): Boolean {
        return true;
    }

}