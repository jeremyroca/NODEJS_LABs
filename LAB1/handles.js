const url = require('url')
const qs = require('querystring')

module.exports = {
 serverHandle: function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)
  
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if(path === '/'){
      res.write('Il faut taper /hello?name=[ton_nom] pour afficher ton nom sur l ecran')  
    }else if (path === '/hello' && 'name' in params) {
       
        if(params.name === 'Jeremy')
        {
      res.write('Hello Monsieur Jeremy ROCA habitant a Creteil')
        }
      else if(params.name === 'Hugo')
      {
      res.write('Hello Monsieur Hugo FOUGERES habitant a Paris')
      }
      else{
        res.write('Hello ' + params['name'])
      }
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'})
    }
  
    res.end();
  }

}