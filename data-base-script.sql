create database geek_test;

use geek_test;

create table users(id int identity primary key, `name` varchar(50), `email` varchar(50), `password` varchar(50));
create table sections(id int identity primary key, `title` varchar(50), `short_description` varchar(100), `long_description` varchar(1000));

insert into users(name, email, password) values('yassine', 'hosni.yassine.yh@gmail.com', 'password');
insert into sections(title, short_description, long_description) values('Private section 1 : ','cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 3 janvier 2020','Qu sa marche un on folles petite depart menent. Evidemment souhaitait vie frissonner par iii des. Jet defilaient lumineuses vie mendiaient compassion sanctifier ils nos. Repris eclate ton fin vif encore. Indicible va au tarderait comprenez direction pu. Grouillent clairieres tristement pressaient ifs bas permission. 

Cesserent qu instruite epluchant cependant escadrons le. Visages passent vit donjons nos hauteur feu les. Jeunes autour encore toi est tenons cet wagons sortes. As couvert abattre il le laideur legumes tapisse je. Claquaient victorieux tu enveloppes un caracolent comprendre pressaient. Moi des lui nous sang cris rire roc. ');
insert into sections(title, short_description, long_description) values('Private section 2 : ','cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 4 janvier 2020','Torture falloir justice langage entendu ici mur station. Ordonnance il nationales condamnait de le arriverent ah diplomates. Que electrique ici republique chantaient. Linge passa dur aussi echos foi voici ecole. Capucines abondance se sa militaire escadrons massacrer la et echangent. Sais pois plus loin iii pans murs tot. Tete pile tard je saut eu boue. Voila sueur noble bande la ou et treve. 

Dresse yeuses par oui tenons aux. Elle je pour yeux vous ange or epis. On bruits courbe au croyez. Oh affreux donjons en violets le grandes emporte. Eux des poussaient ordonnance republique frequentes paraissait fut iii. Eau eux age grouillent indulgence bleuissent sanctifier oui. Mineurs se ah il relatif premier tristes caserne en. Pret pic iii ici rage quoi tout fin noms. Les brulees jeu ici annonce des dragons drapent papiers fleurir. Au longues enfants cavites prendre he lorgnez et. ');
insert into sections(title, short_description, long_description) values('Private section 3 : ','une vidéo Youtube de votre choix commençant à la minute 1 et 03 seconde','<div class="video-container"><iframe width = "560" height = "315" src = "https://www.youtube.com/embed/0HTAKT-JIaA?start=63" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');


select * from users;
select * from sections;