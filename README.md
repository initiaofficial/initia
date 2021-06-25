# Initia


## Deploy online
```sh
Create all canister:
Deploying all canisters.
All canisters have already been created.
Building canisters...
Building frontend...
Installing canisters...
Upgrading code for canister initia, with canister_id rrkah-fqaaa-aaaaa-aaaaq-cai
Upgrading code for canister initia_assets, with canister_id ryjl3-tyaaa-aaaaa-aaaba-cai
Authorizing our identity (default) to the asset canister...
Uploading assets to asset canister...
```


build
```sh
sudo dfx build --network ic  --all
Building canisters...
Building frontend...
```

install
```
sudo dfx canister --network=ic install --all -m=reinstall
```

## Deploy local
```sh
sudo dfx deploy
Create all canister:
Deploying all canisters.
All canisters have already been created.
Building canisters...
Building frontend...
Installing canisters...
Upgrading code for canister initia, with canister_id rrkah-fqaaa-aaaaa-aaaaq-cai
Upgrading code for canister initia_assets, with canister_id ryjl3-tyaaa-aaaaa-aaaba-cai
Authorizing our identity (default) to the asset canister...
Uploading assets to asset canister...
```



build
```sh
sudo dfx build --all
Building canisters...
Building frontend...
```

install
```
sudo dfx canister install --all -m=reinstall
```