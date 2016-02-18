using UnityEngine; 
using System.Collections;
public class PlayerMovement : MonoBehaviour { 
	public float moveSpeed;  
	private float MaxSpeed=5f;

	private Vector3 input;  
	Rigidbody rb;   
	 
	void Start () {      
		rb = GetComponent<Rigidbody>();     
	}          // Update is called once per frame    


	void Update () {   
		input = new Vector3(Input.GetAxisRaw("Horizontal"), 0, Input.GetAxisRaw("Vertical"));   
		if (rb.velocity.magnitude < MaxSpeed){
			rb.AddForce(input*moveSpeed);

		} }}