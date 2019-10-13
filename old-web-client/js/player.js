var THREE = require('three')
    ObjMtlLoader = require('./objmtlloader'),
    loader = new ObjMtlLoader()

var spaceship = null

var Player = function(parent) {
  this.loaded = false
  var self = this, spaceship = null

  self.bbox = new THREE.Box3()

  if(spaceship === null) {
    loader.load('models/tie-bomber/tie-bomber.obj', 'models/tie-bomber/tie-bomber.mtl', function(mesh) {      
      mesh.scale.set(0.1, 0.1, 0.1)
      mesh.rotation.set(0, Math.PI, 0)
      spaceship = mesh
      spaceship.position.set(-25, -25, -100)
      parent.add(spaceship)
      self.loaded = true
      self.bbox.setFromObject(spaceship)
    })
  } else {
    parent.add(spaceship)
    self.loaded = true
  }

  this.update = function() {
    if(!spaceship) return
    this.bbox.setFromObject(spaceship)
  }
}

module.exports = Player
