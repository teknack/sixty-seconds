using UnityEngine; 
using System.Collections;
public class PlayerMovement : MonoBehaviour { 
	public float moveSpeed;  
	private float MaxSpeed=20f;




	 
	void Start () {      
		moveSpeed = 2f;

	}          // Update is called once per frame    


	void Update () {   

		transform.Translate (moveSpeed*Input.GetAxis("Horizontal")*Time.deltaTime, 0f, moveSpeed*Input.GetAxis("Vertical")*Time.deltaTime);
	} }