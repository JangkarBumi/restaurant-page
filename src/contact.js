const contactContent = () => {
  const container = document.createElement('div');
  container.setAttribute('id', 'container');

  const chicken = document.createElement('h2');
  chicken.innerHTML = 'Contact Us';

  let p = document.createElement('p');
  let p2 = document.createElement('p');

  p.innerHTML = 'Address       :221B Baker Street';
  p2.innerHTML = 'Phone number : +555-555-5555';

  container.append(chicken);
  content.appendChild(container);
  container.appendChild(p);
  container.appendChild(p2);
};

export default contactContent;
