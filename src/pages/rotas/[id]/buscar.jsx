import { useRouter } from "next/router";

export default function buscar(){

    //usando o método para capturaras informações da requisição 
    const router = useRouter();

    //pegando os dados de entro da query e colocando em uma constante 
    const id = router.query.id;

    return(
        <div>
            <h1>Rotas/id/buscar/</h1>
            <h1>Codigo solicitado:{id}</h1>
        </div>
    )
}