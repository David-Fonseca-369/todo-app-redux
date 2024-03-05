export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;

  //Pedimos el texto como argumento
  constructor(texto: string) {
    this.texto = texto;
    this.id = Math.random();
    this.completado = false;
  }
}
