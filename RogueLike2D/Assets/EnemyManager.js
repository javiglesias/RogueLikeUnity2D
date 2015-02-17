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
	Instantiate(enemy[spawnPintIndex], transform.position, transform.rotation);
}