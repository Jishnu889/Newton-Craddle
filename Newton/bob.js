class Bob
{
constructor(a,b,c)
{
var options=
{
    isStatic:false
}
this.x=a
this.y=b
this.radius=c 
this.body=Bodies.circle(a,b,c,options)
World.add(world,this.body)
}
display()
{
var bobPosition=this.body.position 
push()
fill("pink")
translate(bobPosition.x,bobPosition.y)
ellipse(0,0,this.radius,this.radius)
pop()
}
}