
interface IWikiArticle {
  title: string;
  url: string;
  text: string;  
}


interface IArticle {
  clone: () => object;
}

class WikiArticle implements IWikiArticle {
  title = ''
  url = ''
  text = ''

  constructor(title: string, url: string, text: string) {
    this.title = title
    this.url = text
    this.text = text
  }
}


class Prototype implements IArticle {
  article: WikiArticle;
  
  constructor(article: WikiArticle){
    this.article = article
  }
  clone(): Prototype {
    return {...this};
  }
}

const nature = new WikiArticle('Природа', 'https://wikipedia.com/nature', 'Текст про природу')

const protNature = new Prototype(nature)

const closeArticle = protNature.clone()
