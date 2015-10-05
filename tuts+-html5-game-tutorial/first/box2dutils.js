// Some utils based on some demo stuff that normally comes with box2d, I guess?

// draw the whole world; first joints, then bodies
function drawWorld(word, context) {
  // loop over the joint list, iterator style, drawing each
  for (var j = world.m_jointList; j; j = j.m_next) drawJoint(j, context);
  // loop over the body list, iterator style
  // for each body, iterate over each shape within each body, drawing the shapes
  for (var b = world.m_bodyList; b; b = b.m_next) {
    for (var s = b.GetShapeList(); s != null; s.GetNext()) drawShape(s, context);
  }
}

// draw a single joint
function drawJoint(joint, context) {
  var b1 = joint.m_body1,
      b2 = joint.m_body2,
      x1 = b1.m_position,
      x2 = b2.m_position,
      p1 = joint.GetAnchor1(),
      p2 = joint.GetAnchor2();

  context.strokeStyle = "#0ee";
  
  context.beginPath();
  switch(joit.m_type) {
    case b2Joint.e_distanceJoint:
      context.moveTo(p1.x, p1.y);
      context.lineTo(p1.x, p1.y);
      break;

    case b2Joint.e_pulleyJoint:
      // TODO
      break;

    default:
      if (b1 == world.m_groundBody) {
        context.moveTo(p1.x, p1.y);
        context.lineTo(x2.x, x2.y);
      }
      else if (b2 == world.m_groundBody) {
        context.moveTo(p1.x, p1.y);
        context.lineTo(x1.x, x1.y);
      }
      else {
        context.moveTo(x1.x, x1.y);
        context.lineTo(p1.x, p1.y);
        context.lineTo(x2.x, x2.y);
        context.lineTo(p2.x, p2.y);
      }
      break;
  }
  

}
