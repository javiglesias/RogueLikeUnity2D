#pragma strict

var enemy : GameObject[];
var spawnTime : float = 3f;
var spawnPoint : Transform[];


function Start () 
{
	InvokeRepeating("Spawn",spawnTime,spawnTime);
}

function Spawn()
{
	var spawnPintIndex : int = Random.Range(0, spawnPoint.Length);
	var posicion : Vector3 = Vector3( Random.Range(-4,6), Random.Range(-4,6));
	Instantiate(enemy[spawnPintIndex],posicion, transform.rotation);
}