export class Enlace {
  id: number;
  asunto: string;
  url: string;
}

export const mock_enlaces: Array<Enlace> = [
  {
    id: 101,
    asunto: 'Libro: Angular 5',
    url: 'https://www.amazon.com/Angular-Practice-applications-tomorrow-framework-ebook/dp/B01N9S0CZN'
  },
  {
    id: 102,
    asunto: 'Kubernetes Up and Running',
    url: 'https://books.google.com.ar/books/about/Kubernetes_Up_and_Running.html?id=K5Q0DwAAQBAJ&redir_esc=y'
  },
  {
    id: 103,
    asunto: 'Kotlin in Action',
    url: 'https://books.google.com.ar/books?id=qtcIkAEACAAJ&dq=kotlin+book&hl=en&sa=X&ved=0ahUKEwiKir2U9fzdAhVJIJAKHR5fBqsQ6AEIKDAA'
  },
  {
    id: 104,
    asunto: 'Reactive Programmming',
    url: 'https://pragprog.com/book/smreactjs5/reactive-programming-with-rxjs-5'
  },

];