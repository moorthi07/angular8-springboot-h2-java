INSERT INTO customer(name, email) values ('Jef anderson', 'jef@and.com');
INSERT INTO customer(name, email) values ('ross david', 'ros@dvd.com');
INSERT INTO customer(name, email) values ('murfy mike', 'mfy@mike.com');
INSERT INTO customer(name, email) values ('sara smith', 's@smith.com');

INSERT INTO address(custid, address1, address2, city, zip, ccc) values ('1', '1, stree1','stree1','city1', '1111', 'ccc1');
INSERT INTO address(custid, address1, address2, city, zip, ccc) values ('2', '2, stree2','stree2','city2', '222', 'ccc2');

commit;