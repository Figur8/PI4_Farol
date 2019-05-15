package com.slumdev.farol;

import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

public class LoginActivity extends AppCompatActivity  {

    private EditText editLogin, editPassword;
    private TextView createAcount, logo;
    private Button enter;
    private ImageView imgLogo;

    //Login com email e senha
    private FirebaseAuth userAuth = FirebaseAuth.getInstance();
    private FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();



    View.OnClickListener logar = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            validateLogin();
        }
    };

    View.OnClickListener criarConta = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            Intent i = new Intent(LoginActivity.this, RegisterActivity.class);
            startActivity(i);
            finish();
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        imgLogo = findViewById(R.id.imgLogo);
        editLogin = findViewById(R.id.user_login);
        editPassword = findViewById(R.id.user_password);
        logo = findViewById(R.id.text_login_logo);

        enter = findViewById(R.id.btn_login);
        enter.setOnClickListener(logar);

        createAcount = findViewById(R.id.text_register);
        createAcount.setOnClickListener(criarConta);

    }


    public void logarUsuario(){
        final String loginEmail = editLogin.getText().toString();
        final String loginPassword = editPassword.getText().toString();

        userAuth.signInWithEmailAndPassword(loginEmail, loginPassword)
            .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                @Override
                public void onComplete(@NonNull Task<AuthResult> task) {
                    if( task.isSuccessful()){
                        Log.d("Login: ", "LoginSucess");
                        user = userAuth.getCurrentUser();
                        Intent intent = new Intent(LoginActivity.this, MainActivity.class);
                        startActivity(intent);
                        finish();
                    }else{
                        Log.w("Login: ", "Login Failure!", task.getException());
                        Toast.makeText(LoginActivity.this, "Authentication Failed!", Toast.LENGTH_SHORT).show();
                    }
                }
            });
    }


    // Verifico neste método de ínicio da activity se já tenho um usuário logado.
    @Override
    protected void onStart() {
        super.onStart();
        if(user != null){
            Intent intent = new Intent(LoginActivity.this, MainActivity.class);
            startActivity(intent);
            finish();
        }
    }


    // Método que valida o login, passo neste método o método logarUsuário, caso a validação
    // seja positiva.
    public boolean validateLogin() {
        boolean validate = true;

        String email = editLogin.getText().toString();
        String password = editPassword.getText().toString();

        if (email.isEmpty()) {
            editLogin.setError("Campo Obtigatório");
        } else if (password.isEmpty()) {
            editPassword.setError("Campo Obtigatório");
        } else {
            editLogin.setError(null);
            editPassword.setError(null);
            logarUsuario();
        }
        return validate;
    }

}
//TODO - Arrumar o método de login baseado no firebase. Não consigo simular login e registro ao mesmo tempo
// Fazer registro com email somente? Devemos efetuar login com Google ou Facebook? Enviar confirmação para o email?
