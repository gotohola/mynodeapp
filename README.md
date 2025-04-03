##Reiniciar certificados##
sudo microk8s stop
sudo microk8s refresh-certs --cert ca.crt
sudo microk8s start



###Logeo##
argocd login localhost:8080 \
  --username admin \
  --password "contraseña" \
  --insecure
'admin:login' logged in successfully
