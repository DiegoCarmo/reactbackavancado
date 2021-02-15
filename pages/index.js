import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous">
        </script>

        <title>Meu primeiro App</title>
      </Head>
      <body>
        <div>
          <div className="social">
            <div class="d-flex justify-content-center">
              <a href="https://instagram.com" target="_blank"><img className="lgsocial" width="50px" src="./imagens/instagram.png" /></a>
              <a href="https://facebook.com" target="_blank" ><img className="lgsocial" width="50px" src="./imagens/facebook.png" /></a>
              <a href="https://whatsapp.com" target="_blank"><img className="lgsocial" width="50px" src="./imagens/whats.png" /></a>
            </div>
          </div>

          <div id="form" class="container p-3 mb-2 bg-dark text-white " >
            <form className="form-group">
              <h1>Como podemos te ajudar ?</h1>
              <hr />

              <label for="pnome">Nome:</label><br />
              <input className="form-control" type="text" id="nome" name="nome" />
              <br />
              <br />
              <label className="areaMsg">E-mail:</label><br />
              <input className="form-control" type="email" name="email"></input>

              <br /><br />
              <label className="areaMsg">Mensagem:</label><br />
              <textarea className="form-control" name="msg" id="msg" rows="5"></textarea>
              <br /><br />

              <input className="d-inline" type="checkbox" name="checkbox" id="checkbox" />
              <label className="form-check-label d-inline" for="checkbox">Concordo com termos de segurança.</label>
              <br /><br />

              <input className="form-control btn btn-primary" type="submit" id="submit" style={{ width: "200px" }} />
              <br /><br />
            </form>
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <h3>Comentarios dos clientes</h3>
                  <div className="list-group">


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </body>


    </div>
  )
}
