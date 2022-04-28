

container = document.getElementById( 'canvas_youtube' );
document.body.appendChild( container );


const gltfLoader = new THREE.GLTFLoader();

let scene = new THREE.Scene();  //Creation de la scene dans la constante scene 
let camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 ); // Création de la cam avec : FOV, le Ratio (taille), valeur à partir du quel les object sont rendu, et valuer à partir du quels les objects ne sont plus rendu 

camera.position.z = 50;
camera.position.x = 20;

let rendu = new THREE.WebGLRenderer( {alpha: true });  // Le mode de rendu, ici ib ajoute de la transparence 
//rendu.setClearColor (0x252240);
rendu.setSize((0.20*window.innerWidth ) , ( 0.20 * window.innerHeight) ); //La taille du rendu 
container.appendChild( rendu.domElement ); // Truc 'canvas' qu'utilise le moteur de rendu 


/* Object 3D */ /*  POUR CREER LA FORME EN CERCLE

let forme = new THREE.Group();   

let geometrie = new THREE.TorusKnotGeometry(10, 3, 100, 16);

let materiel = new THREE.MeshNormalMaterial({
    //color: 0xff000,
    transparent: true,
    //opactity: 1,
    wireframe: true,
    wireframeLinewidth: 5,
   // wireframeLinejoin: 'round',
   // wireframeLinecap: 'round',

});
*/
/** PERMET DE ROTATE LA FORME EN LA BOUGEANT  */

let control = new THREE.OrbitControls(camera, rendu.domElement);
control.domElement.style.touchAction = 'false';
//control.autoRotate = true;
control.update();

/**Light  */
/*
const directionalLight = new THREE.DirectionalLight( 0xffffff, 10 );
scene.add( directionalLight );
*/
const light = new THREE.AmbientLight( 0x404040,  10); // soft white light
scene.add( light );
/*Add obejct 3D */
/*

var loader = new THREE.GLTFLoader();

loader.load( 'objects/logo_blender.glb', function ( gltf )
{

    logo_blender = gltf.scene;  // logo bledner  3D object is loaded
    logo_blender.scale.set(15, 15, 15);
    logo_blender.position.y = 0;
    logo_blender.position.z = 40;
    logo_blender.rotation.x = 120.5;
    scene.add(logo_blender);


} );   
*/

/* LOAD L'OBJECT 3D */ 

var loader = new THREE.GLTFLoader();

loader.load( 'objects/logo_youtube.glb', function ( gltf )
        {

            logo_youtube = gltf.scene;  // logo bledner  3D object is loaded
            logo_youtube.scale.set(10, 10, 10);
            logo_youtube.position.y = 0;
            logo_youtube.position.z = 0;
            scene.add(logo_youtube);
        } );   



        /*
 loader.load( 'objects/logo_blender.glb', function ( gltf )
        {

            logo_blender = gltf.scene;  // logo bledner  3D object is loaded
            logo_blender.scale.set(10, 10, 10);
            logo_blender.position.y = 20;
            logo_blender.position.z = 0;
            scene.add(logo_blender);
        } );  



*/
/*
forme.add(new THREE.Mesh(geometrie, materiel));

scene.add(forme);


let control = new THREE.OrbitControls(camera, rendu.domElement);
control.domElement.style.touchAction = 'false';
control.update();


let animer = function() {

    requestAnimationFrame(animer);

    forme.rotation.x += 0.005;
    forme.rotation.y += 0.005;
    rendu.render(scene, camera);
    
}

animer();

let animer = function() {

    requestAnimationFrame(animer);
    rendu.render(scene, camera);
    
}
*/

let animer = function() {

    requestAnimationFrame(animer);
    logo_youtube.rotation.y += 0.005; // Le faoit tourner sur soit meme
    rendu.render(scene, camera);
    control.update();
    
}

animer();

