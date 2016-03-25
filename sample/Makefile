DOCKER_REGISTRY=
HOST_KEY=$(HOME)/.vagrant.d/insecure_private_key
HOST_USER=vagrant
HOST_NAME=openapi-codegen-sample-1

up:
	# vagrant plugin install vagrant-notify-forwarder
	# vagrant plugin install vagrant-hostmanager
	vagrant up
	docker-machine rm -y $(HOST_NAME) || true
	docker-machine \
			create \
			--driver generic \
			--generic-ip-address `ping -c 1 $(HOST_NAME) | awk -F'[()]' '/PING/{print $$2}'` \
			--generic-ssh-key $(HOST_KEY) \
			--generic-ssh-user $(HOST_USER) \
			$(HOST_NAME)

down:
	docker-machine rm -y $(HOST_NAME) || true
	vagrant destroy -f

start:
	docker-compose -f openapi-codegen.yaml up

stop:
	docker-compose -f openapi-codegen.yaml stop
	docker-compose -f openapi-codegen.yaml rm -f
