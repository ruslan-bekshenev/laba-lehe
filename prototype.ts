
interface IWikiArticle {
  title: string;
  url: string;
  text: string;  
}

class WikiArticle implements IWikiArticle {
  title = ''
  url = ''
  text = ''

  constructor(title: string, url: string, text: string) {
    this.title = title
    this.url = url
    this.text = text
  }

  clone() {
    return new WikiArticle(this.title, this.url, this.text)
  }
}



const nature = new WikiArticle('Природа', 'https://wikipedia.com/nature', 'Текст про природу')

const cloneNature = nature.clone()

cloneNature.title = 'Nature 2'

console.log(nature, cloneNature)